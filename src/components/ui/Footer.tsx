interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-neutral-900 text-white py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <p className="safari-body text-neutral-400">
            © 2025 Safari Culture - Wilderness Namibia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}