// this is how to make a reusable component using react props
import Card from "./components/Card";
import Title from "./components/Title";

function App() {
  const produkter = [
    { id: "1", title: "CardTitle", description: "CardDescription" },
    {
      id: "2",
      title: "CardTitle 2",
      description: "CardDescription Two",
    },
  ];
  return (
    <section>
      {produkter?.map((produkt) => (
        <Card
          key={produkt.id}
          title={produkt.title}
          description={produkt.description}
        />
      ))}
      {/* <Card title="CardTitle" description="CardDescription" /> */}
      {/* <Card title="CardTitle2" description="CardDescription2" /> */}
    </section>
  );
}

export default App;
