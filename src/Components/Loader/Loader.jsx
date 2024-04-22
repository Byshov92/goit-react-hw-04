import { Grid } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#4f4da9"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default Loader;
