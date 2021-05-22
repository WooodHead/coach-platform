import { FC } from "react";

export const Avatar: FC<{
  image: string;
  size: number;
  name: string;
}> = ({ image, size, name }) => {
  return (
    <div className="avatar">
      <img
        src={image}
        width={size}
        height={size}
        alt={`${name}s Avatar Image`}
      />
      <style jsx>{`
        .avatar img {
          display: block;
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};
