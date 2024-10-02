import { ReactNode } from 'react';

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div>
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
        {icon}
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
}