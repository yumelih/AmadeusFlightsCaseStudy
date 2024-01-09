function Error({err}) {
    return (
        <div className="w-full flex flex-col items-center bg-red-800 mt-4">
            <h2>
                Something went wrong!
            </h2>
            <p>{err.message}</p>
        </div>
    )
}

export default Error
