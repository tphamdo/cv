import Input from './Input.jsx';

function PersonalInfoFormCard({ info, setInfo }) {
  return (
    <div className="personalInfoCard">
      <h3 className="header"> Personal Info </h3>
      <form className="personalInfoForm personalInfoBody">
        <Input
          name="Name"
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
        <Input
          name="Email"
          type="email"
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
        />
        <Input
          name="Phone"
          type="tel"
          value={info.phone}
          onChange={(e) => setInfo({ ...info, phone: e.target.value })}
        />
        <Input
          name="Address"
          value={info.address}
          onChange={(e) => setInfo({ ...info, address: e.target.value })}
        />
      </form>
    </div>
  );
}

export default PersonalInfoFormCard;
