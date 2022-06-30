const OverviewPage = ({ project }) => {
  const { github_url, descriptions } = project;
  return (
    <div className="card-body" style={{ height: "16em", overflowY: "auto" }}>
      <p className="card-text">{descriptions}</p>
      <a href={github_url} target="_blank" rel="noreferrer">
        {github_url}
      </a>
    </div>
  );
};

export default OverviewPage;
