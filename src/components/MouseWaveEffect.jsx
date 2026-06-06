import { useEffect, useRef } from 'react';

export default function MouseWaveEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const mouse = { x: -999, y: -999 };
    const current = { x: -999, y: -999 };
    const ripples = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onClick = (e) => {
      ripples.push(
        { x: e.clientX, y: e.clientY, r: 0, opacity: 1, color: 'rgba(255,214,0,', delay: 0 },
        { x: e.clientX, y: e.clientY, r: 0, opacity: 0, color: 'rgba(255,255,255,', delay: 8 },
        { x: e.clientX, y: e.clientY, r: 0, opacity: 0, color: 'rgba(255,214,0,', delay: 16 }
      );
    };
    window.addEventListener('click', onClick);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      current.x += (mouse.x - current.x) * 0.08;
      current.y += (mouse.y - current.y) * 0.08;

      if (current.x > 0) {
        const r = 280;
        const grad = ctx.createRadialGradient(current.x, current.y, 0, current.x, current.y, r);
        grad.addColorStop(0,   'rgba(255,200,0,0.18)');
        grad.addColorStop(0.4, 'rgba(255,180,0,0.08)');
        grad.addColorStop(1,   'rgba(255,200,0,0)');
        ctx.beginPath();
        ctx.arc(current.x, current.y, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];

        if (rp.delay > 0) {
          rp.delay--;
        } else {
          if (rp.opacity === 0) rp.opacity = 1;
          rp.r += 4;
          rp.opacity -= 0.025;

          ctx.beginPath();
          ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
          ctx.strokeStyle = rp.color + rp.opacity + ')';
          ctx.lineWidth = 2;
          ctx.stroke();

          if (rp.opacity <= 0) ripples.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}