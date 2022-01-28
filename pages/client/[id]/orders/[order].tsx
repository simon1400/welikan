import { NextPage } from "next"
import Order from "../../../../components/Order"
import Page from "../../../../layout/Page"

const OrderFull: NextPage = () => {
  return (
    <Page admin>
      <Order 
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra semper egestas. Phasellus scelerisque id leo eget iaculis. Etiam tincidunt molestie risus semper convallis. Nam sed ante non augue vulputate malesuada. Nam sed faucibus urna, a malesuada tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra semper egestas. Phasellus scelerisque id leo eget iaculis. Etiam tincidunt molestie risus semper convallis. Nam sed ante non augue vulputate malesuada. Nam sed faucibus urna, a malesuada tellus."
        steps={{
          title: "Заказ создан",
          date: "20.07.2021",
          step: 1
        }}
      />
    </Page>
  )
}

export default OrderFull