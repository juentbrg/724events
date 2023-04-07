import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
// import { useData } from "../../contexts/DataContext";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
  });
  it("a list a people is displayed", () => {
    // to implement
  });
  it("a footer is displayed", () => {
    // to implement
  });
  it("an event card, with the last event, is displayed", () => {
    // const { last } = useData();
    // const eventCard = document.querySelector(".EventCard--small");
    // const title = eventCard.querySelector(".EventCard__title");
    // const date = eventCard.querySelector(".EventCard__month");
    // const image = eventCard.querySelector('[data-testid="card-image-testid"]');
    // expect(title).toBe(last.title);
    // expect(date).toBe(last.date);
    // expect(image.src).toBe(last.cover);
    // expect(image.alt).toBe(last.title);
  });
});
