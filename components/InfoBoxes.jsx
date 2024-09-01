import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    // <!-- Renters and Owners -->
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            textColor="text-gray-800"
            buttonInfo={{
              text: "Browse Properties",
              backgroundColor: "bg-black",
              link: "/search",
            }}
          >
            Find the perfect property that suits your needs.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            buttonInfo={{
              text: "Add Property",
              backgroundColor: "bg-blue-500",
              link: "/properties/add",
            }}
          >
            List your properties and reach potential tenants.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
