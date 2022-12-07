import styled from "styled-components";
import Button from "./Button";

const SLi = styled.li`
    margin-bottom: 10px;
    padding: 16px;
    border-radius: 8px;
    background: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SDivInfo = styled.div`
    color: #f2f2f2;
    p {
        font-size: 16px;
        margin-bottom: 2px;
    }

    span {
        font-size: 16px;
        font-weight: bold;
    }
`;

const SDivQuant = styled.div`
    color: #f2f2f2;
    width: 86px;

    p {
        padding: 2px;
    }
    
    button {
        width: 100%;
        border: 1px solid #ffffff;
        border-radius: 5px;
        cursor: pointer;
    }
`;

const SDivUnits = styled.div`
    color: #f2f2f2;
    width: 86px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        padding: 2px;
    }
    
    button {
        padding: 5px 10px;
        border: 1px solid #ffffff;
        border-radius: 5px;
        cursor: pointer;
    }
`;

/**
  *  @param {Object} product
*/
function CartProduct({ product, onChange, isLoading }) {
    return (
        <SLi>
            <SDivInfo>
                <p>{product.name.length > 60 ? (product.name.substring(0, 60) + '...') : product.name}</p>
                <span>R${product.price}</span>
            </SDivInfo>
            <SDivUnits>
                <SDivQuant>
                    <SDivUnits>
                        <button disabled={isLoading} onClick={() => onChange(product, -10)}>
                            -10
                        </button>
                    </SDivUnits>
                    <SDivUnits>
                        <button disabled={isLoading} onClick={() => onChange(product, -1)}>
                            -
                        </button>
                        <p>{product.units}</p>
                        <button disabled={isLoading} onClick={() => onChange(product, +1)}>
                            +
                        </button>
                    </SDivUnits>
                    <SDivUnits>
                        <button disabled={isLoading} onClick={() => onChange(product, +10)}>
                            +10
                        </button>
                    </SDivUnits>
                </SDivQuant>
            </SDivUnits>
        </SLi>
    );
}

/* Elemento de seção personalizado com CSS */
const SSection = styled.section`
    padding: 20px; 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 50px;
    gap: 20px;
`;
/* Elemento de lista personalizado com CSS */

const SUl = styled.ul` 
    list-style-type: none;
`;

/**
 * Componente para listagem de produtos no carrinho
* @param { Object[] } products Produtos para listagem
* @param { Function } onClick Função de finalização
* @param { Boolean } isLoading Status de loading
*/
function Cart({ products, onChange, onClick, isLoading = false }) {
    return (
        <SSection>
            <SUl>
                {
                    products.map((product) => (
                        <CartProduct
                            key={product.id}
                            product={product}
                            onChange={onChange}
                            isLoading={isLoading}
                        />
                    ))
                }
            </SUl>
            <Button onClick={onClick} isLoading={isLoading}>
                <ion-icon name="cart-sharp"></ion-icon>
                Finalizar Compra
            </Button>
        </SSection>

    );
}

export default Cart;