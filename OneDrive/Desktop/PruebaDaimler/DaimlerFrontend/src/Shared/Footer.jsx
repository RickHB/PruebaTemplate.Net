import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <p>&copy; 2024 Daimler Truck Santiago. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">About</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M24 4.56v14.88c0 2.52-2.07 4.56-4.56 4.56H4.56C2.07 24 0 21.93 0 19.44V4.56C0 2.07 2.07 0 4.56 0h14.88C21.93 0 24 2.07 24 4.56zM7.08 19.2h-3.6V9h3.6v10.2zM5.28 7.68c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zM20.64 19.2h-3.6v-5.16c0-1.32-.48-2.16-1.68-2.16-.9 0-1.44.6-1.68 1.2-.12.24-.12.6-.12.96v5.16h-3.6V9h3.6v1.44c.48-.72 1.32-1.68 3.12-1.68 2.28 0 4.08 1.44 4.08 4.56v5.88z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M24 4.56v14.88c0 2.52-2.07 4.56-4.56 4.56H4.56C2.07 24 0 21.93 0 19.44V4.56C0 2.07 2.07 0 4.56 0h14.88C21.93 0 24 2.07 24 4.56zM7.08 19.2h-3.6V9h3.6v10.2zM5.28 7.68c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zM20.64 19.2h-3.6v-5.16c0-1.32-.48-2.16-1.68-2.16-.9 0-1.44.6-1.68 1.2-.12.24-.12.6-.12.96v5.16h-3.6V9h3.6v1.44c.48-.72 1.32-1.68 3.12-1.68 2.28 0 4.08 1.44 4.08 4.56v5.88z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.5 0h-21C.675 0 0 .675 0 1.5v21C0 23.325.675 24 1.5 24h21c.825 0 1.5-.675 1.5-1.5v-21c0-.825-.675-1.5-1.5-1.5zM7.5 20.25h-3v-9h3v9zm-1.5-10.5C5.172 9.75 4.5 9.078 4.5 8.25S5.172 6.75 6 6.75 7.5 7.422 7.5 8.25 6.828 9.75 6 9.75zm14.25 10.5h-3v-4.5c0-1.103-.897-2-2-2s-2 .897-2 2v4.5h-3v-9h3v1.154c.865-1.155 2.31-1.904 3.793-1.904 2.486 0 4.5 2.014 4.5 4.5v5.25z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.5 0h-21C.675 0 0 .675 0 1.5v21C0 23.325.675 24 1.5 24h21c.825 0 1.5-.675 1.5-1.5v-21c0-.825-.675-1.5-1.5-1.5zM7.5 20.25h-3v-9h3v9zm-1.5-10.5C5.172 9.75 4.5 9.078 4.5 8.25S5.172 6.75 6 6.75 7.5 7.422 7.5 8.25 6.828 9.75 6 9.75zm14.25 10.5h-3v-4.5c0-1.103-.897-2-2-2s-2 .897-2 2v4.5h-3v-9h3v1.154c.865-1.155 2.31-1.904 3.793-1.904 2.486 0 4.5 2.014 4.5 4.5v5.25z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 2.163c-5.444 0-9.837 4.392-9.837 9.837 0 4.334 3.545 8.261 8.204 9.781-.112-.813-.213-2.063.046-2.953.23-.811 1.478-5.163 1.478-5.163s-.377-.753-.377-1.865c0-1.747 1.014-3.055 2.281-3.055 1.076 0 1.594.807 1.594 1.774 0 1.082-.688 2.703-1.043 4.207-.297 1.257.627 2.279 1.857 2.279 2.229 0 3.948-2.347 3.948-5.722 0-2.986-2.144-5.063-5.205-5.063-3.551 0-5.634 2.662-5.634 5.415 0 1.082.419 2.246.944 2.874.106.127.12.239.09.368-.1.414-.329 1.317-.373 1.5-.061.246-.198.298-.459.181-1.717-.713-2.792-2.95-2.792-4.75 0-3.873 2.812-7.441 8.116-7.441 4.254 0 7.56 3.031 7.56 7.07 0 4.214-2.664 7.605-6.369 7.605-1.242 0-2.412-.647-2.817-1.41l-.768 2.924c-.278 1.056-1.037 2.376-1.549 3.183.67.207 1.378.32 2.116.32 5.444 0 9.837-4.393 9.837-9.837 0-5.445-4.393-9.837-9.837-9.837z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
