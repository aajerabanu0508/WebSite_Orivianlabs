export default function BlogPage() {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold text-red-600">
        Blogs
      </h1>

      <ul className="mt-8">
        <li>Kubernetes Best Practices</li>
        <li>Terraform Best Practices</li>
        <li>Prometheus Monitoring Guide</li>
      </ul>
    </div>
  );
}