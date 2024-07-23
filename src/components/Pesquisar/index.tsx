import Search from '../../Icons/Search.svg'

export const Pesquisar = () => {
    return (
        <>
        <div className="relative">
            <input type="text" placeholder="Pesquisar Produto..." className="no-border rounded-lg px-12 py-3 ml-6 w-96" />
            <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img src={Search} alt="Icone de Pesquisar" />
                <span className="sr-only">Pesquisar</span>
            </button>
        </div>
        </>
    )
};