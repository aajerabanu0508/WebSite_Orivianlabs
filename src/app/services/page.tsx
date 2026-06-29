export default function ServicesPage() {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold text-red-600">
        Services
      </h1>

      <ul className="mt-10 space-y-4">
        <li>Kubernetes Consulting</li>
        <li>CI/CD Consulting</li>
        <li>SRE Consulting</li>
        <li>Observability</li>
        <li>Infrastructure as Code</li>
        <li>Network & Storage</li>
        <li>Security Platform Engineering</li>
      </ul>
    </div>
  );
}