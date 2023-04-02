import Form from "./Form";
import Gallery from "./Gallery";
import { useApi } from "./ApiInfo.js";

const Next = () => {
    const { showGallery } = useApi();
    return (
      <>
        {showGallery
            ? < Gallery />
            : <Form />
        }
      </>
    );
}

export default Next;