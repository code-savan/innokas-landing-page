import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Innokas Nigeria Limited</h3>
            <p className="text-sm">Your trusted partner for high-quality fruits, frozen foods, and agricultural products.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-sm hover:underline">About Us</Link></li>
              <li><Link href="#products" className="text-sm hover:underline">Our Products</Link></li>
              <li><Link href="#why-choose-us" className="text-sm hover:underline">Why Choose Us</Link></li>
              <li><Link href="#contact" className="text-sm hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="text-sm">Location: 16, Cause Way Road, Saka Alao Street, Ijora 7up, Lagos State.</p>
            <p className="text-sm">Tel: 08089149601, 08123047312</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Innokas Nigeria Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
