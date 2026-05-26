import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Physiotherapiezentrum Katrin Schulte B.A." },
      {
        name: "description",
        content:
          "Physiotherapiepraxis Katrin Schulte B.A. in Büren – herzlich willkommen.",
      },
    ],
  }),
});

function Home() {
  return (
    <div className="c-content">
      <h1>
        <img
          className="alignleft"
          src="http://www.physio-bueren.de/wp-content/uploads/2014/02/physio-bueren-home-1-kreis.png"
          alt=""
          width={247}
          height={324}
        />
        Herzlich Willkommen
      </h1>
      <p>
        auf der Homepage der Physiotherapiepraxis Katrin Schulte.
        <br />
        Lernen Sie uns kennen und schauen Sie sich um!
      </p>
      <p>
        <img
          src="http://www.physio-bueren.de/wp-content/uploads/2014/02/physio-bueren-home-2-kreis.png"
          alt=""
          width={295}
          height={403}
        />
      </p>
      <div className="down" />
    </div>
  );
}
