import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="relative">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-black dark:text-white">
            &copy; {new Date().getFullYear()} Jamie Isaksen. Get in touch at{' '}
            <a
              href="mailto:jamie@jamie.no?subject=Inquiry"
              className="font-bold text-black dark:text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              jamie@jamie.no
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
