import DetWisata from "@/components/layouts/wisataLayout/DetWisata";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:3000/api/product/wisata/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products: data },
  };
}

const wisataDynamic = ({ products }) => {
  return (
    <>
      <DetWisata products={products} />
    </>
  );
};

export default wisataDynamic;
