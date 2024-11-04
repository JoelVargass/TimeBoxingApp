const Login: React.FC = () => {
    return (
        <main className="flex justify-center items-center bg-[#f8f9fb] min-h-screen px-0 md:px-10">
            <div className="flex flex-col md:flex-row flex-1 bg-white rounded-none md:rounded-lg border-none md:border-2 h-screen md:h-auto items-center border-gray-100 overflow-auto shadow-xl w-full max-w-lg">
                <div className="w-full p-8 flex flex-col justify-center flex-1 grow">
                    <h1 className="text-center text-2xl font-bold mb-8">Bienvenido de nuevo</h1>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-base font-medium text-gray-700">Correo</label>
                            <input
                                type="text"
                                placeholder="Escribe tu correo"
                                id="email"
                                className="mt-1 block w-full border border-gray-300 placeholder:text-sm rounded-lg shadow-sm p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-base font-medium text-gray-700">Contraseña</label>
                            <input
                                type="password"
                                placeholder="*****"
                                id="password"
                                className="mt-1 block w-full border border-gray-300 placeholder:text-sm rounded-lg shadow-sm p-2"
                            />
                        </div>
                        <button type="submit" className="w-full py-2 px-4 bg-[#d92547] text-white rounded-md font-medium">
                            Iniciar Sesión
                        </button>
                    </form>
                    <div className="mt-4 flex justify-center">
                        {/* Coloca aquí los botones de inicio de sesión con redes sociales, si los necesitas */}
                    </div>
                    <div className="mt-6 text-center">
                        <span className="text-gray-600">¿Aún no tienes cuenta? </span>
                        <a href="/register" className="text-[#d92547] hover:underline">Crear Cuenta</a>
                    </div>
                </div>


                <footer className="bg-primary-purple w-full p-1 md:hidden">
                    <p className="text-base text-white text-center font-bold">TimeBoxing App</p>
                </footer>
            </div>
        </main>
    );
};

export default Login;
