import { NextPage } from "next"
import Breadcrumbs from "../../components/Breadcrumbs"
import FullHeadItem from "../../components/FullHeadItem"
import Page from "../../layout/Page"

const NewsFull: NextPage = () => {
  return (
    <Page>
      <div className="uk-container">
        <Breadcrumbs />
        <FullHeadItem />
        <div className="content">
          <p>Условия акции:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ex neque, quis rutrum sapien eleifend ac. Vestibulum hendrerit tellus risus. Proin convallis fermentum consectetur. Sed dictum blandit enim, non tincidunt massa tincidunt quis. Curabitur pulvinar erat in bibendum rhoncus. Curabitur tempus diam a lobortis iaculis. Praesent eget dui eros. Curabitur ac tempus sem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ex neque, quis rutrum sapien eleifend ac. Vestibulum hendrerit tellus risus. Proin convallis fermentum consectetur. Sed dictum blandit enim, non tincidunt massa tincidunt quis. Curabitur pulvinar erat in bibendum rhoncus. Curabitur tempus diam a lobortis iaculis. Praesent eget dui eros. Curabitur ac tempus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ex neque, quis rutrum sapien eleifend ac. Vestibulum hendrerit tellus risus. Proin convallis fermentum consectetur. Sed dictum blandit enim, non tincidunt massa tincidunt quis. Curabitur pulvinar erat in bibendum rhoncus. Curabitur tempus diam a lobortis iaculis. Praesent eget dui eros. Curabitur ac tempus sem.</p>
        </div>
      </div>
    </Page>
  )
}

export default NewsFull