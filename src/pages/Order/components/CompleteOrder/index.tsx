import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  AdressContainer,
  CardOfPayment,
  CompleteOrderContainer,
  FormContainer,
  FormOfPayment,
} from "./styles";

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <h3>Complete seu pedido</h3>
      <AdressContainer>
        <div>
          <MapPinLine size={25} />
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>
        <FormContainer>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </FormContainer>
      </AdressContainer>
      <FormOfPayment>
        <div>
          <CurrencyDollar size={25} />
          <div>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <div>
          <CardOfPayment>
            <CreditCard size={18} />
            <p>Cartão de crédito</p>
          </CardOfPayment>
          <CardOfPayment>
            <Bank size={18} />
            <p>cartão de débito</p>
          </CardOfPayment>
          <CardOfPayment>
            <Money size={18} />
            <p>dinheiro</p>
          </CardOfPayment>
        </div>
      </FormOfPayment>
    </CompleteOrderContainer>
  );
}
