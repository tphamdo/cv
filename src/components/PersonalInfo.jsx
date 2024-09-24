function PersonalInfo({ info }) {
  return (
    <div className="cv-header">
      <div className="name">{info.name}</div>
      <div className="info">
        <div>{info.email}</div>
        <div>{info.phone}</div>
        <div>{info.address}</div>
      </div>
    </div>
  );
}

export default PersonalInfo;
