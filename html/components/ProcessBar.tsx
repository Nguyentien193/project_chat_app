import { useState, useEffect } from 'react';

const ProgressBar = ({ isSubmitting }: { isSubmitting: boolean }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isSubmitting) {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setProgress(current);
        if (current >= 100) clearInterval(interval);
      }, 20); // Tổng cộng 2s đến 100%
    } else {
      setProgress(0); // Reset nếu cần
    }
  }, [isSubmitting]);

  return (
    <div className="progress-bar">
      <span style={{ width: `${progress}%` }}>
        <b>{progress}%</b>
      </span>
    </div>
  );
};

export default ProgressBar;
