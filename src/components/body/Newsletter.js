import Button from "../button";

const Newsletter = () => {
  return (
    <section className="text-center m-16">
      <h2 className="font-bold text-2xl mb-4">Subscribe to our Newsletter</h2>
      <p className="text-sm mb-8">
        We’ll keep you updated on upcoming vacations, discounts, and
        sponsorships.
      </p>
      <div className="flex items-center space-x-4 justify-around flex-wrap">
        <input
          className="p-4 border rounded-2xl flex-1"
          type="email"
          placeholder="Enter your email address"
        />
        <Button className="flex-shrink-0">Subscribe</Button>
      </div>
    </section>
  );
};

export default Newsletter;
