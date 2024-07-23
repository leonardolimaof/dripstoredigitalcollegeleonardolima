import { Pesquisar } from "../Pesquisar";
import LogoDigital from "../../assets/logo.svg";
import { ButtonEntrar } from "../ButtonEntrar";
import { Carrinho } from "../Carrinho";

export const Navbar = () => {
    return (
        <nav>
            <div className="container mx-auto px-4 m-5 flex items-center justify-center">
                <img src={LogoDigital} alt="LogoDIgitalCollege" />
                <Pesquisar />
                <a href="#" className="text-lg underline ml-12 px-3 whitespace-nowrap">Cadastre-se</a>
                <ButtonEntrar />
                <Carrinho />
            </div>
            <div className="container px-12 py-6">
<ul className="flex pl-16 space-x-4 text-lg">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                </ul>
            </div>
        </nav>
    )
};
