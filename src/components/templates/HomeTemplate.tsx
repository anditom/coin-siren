import React from "react";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { Card } from "../molecules/Card";
import { Form } from "../molecules/Form";

export const HomeTemplate = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <Card
          title="Welcome to Coin-siren"
          description="Fast and secure money transfers."
        />
        <div className="mt-8">
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
};
