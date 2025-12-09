interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-green-900 text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className="mt-4 text-lg text-green-100 max-w-3xl">{description}</p>}
      </div>
    </section>
  )
}
