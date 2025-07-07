import Input from "@/components/input";

const contact = () => {
  return (
    <section aria-labelledby="contact">
      <div className="bg-fade-secondary rounded px-16 pt-14 pb-16">
        <h3 className="mb-9 text-4xl font-medium">
          Let’s work with
          <span className="text-primary"> together</span>
        </h3>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <Input placeholder="First name*" fullWidth />
            <Input placeholder="Last name*" fullWidth />
            <Input placeholder="example@gmail.com*" fullWidth />
            <Input placeholder="Last name*" fullWidth />
          </div>
          <Input placeholder="Enter subject" />
          <Input placeholder="Write your message" fullWidth isTextfield />
          <button className="bg-input hover-reverse-gradient-right flex-1 cursor-pointer rounded px-4 py-3.5 font-medium tracking-wide outline-none">
            Send message
          </button>
        </div>
      </div>
    </section>
  );
};

export default contact;
