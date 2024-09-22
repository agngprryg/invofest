import CustomDatePicker from "@/components/elements/DatePicker";
import Footer from "@/components/elements/Footer";
import Navbar from "@/components/fragments/Navbar";

const DetWisata = ({ products }) => {
  return (
    <>
      <Navbar />
      <div>
        <CustomDatePicker products={products} />
      </div>
      <Footer />
    </>
  );
};

export default DetWisata;
