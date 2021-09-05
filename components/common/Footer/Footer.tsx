import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer
      className="transition ease-default fixed bottom-0 left-0 right-0"
      style={{
        backdropFilter: 'saturate(180%) blur(5px)',
        transitionDuration: '500ms',
        transitionProperty: 'background-color',
      }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-black dark:text-white">
            &copy; {new Date().getFullYear()} Jamie Isaksen. Get in touch at
            <a href="mailto:jamie@jamie.no?subject=Inquiry">jamie@jamie.no</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
