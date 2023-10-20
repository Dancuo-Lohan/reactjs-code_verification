export default function Layout({ children }) {

    return (
        <section className="bg-content w-screen lg:h-screen flex flex-col items-center justify-center py-10 px-5 lg:py-0 lg:px-0">
            <div className="max-w-screen-md w-full flex flex-col gap-10">
                {children}
            </div>
        </section>
    )
}