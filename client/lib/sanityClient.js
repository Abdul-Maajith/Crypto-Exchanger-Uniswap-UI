import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: "5pkgymep",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skXBsQHKB3Q8T4KnyfQi5D8zsXLBaihjKg4oJzQSCTU9jaz7g240dUrWb7njYXGSWB6EX0g0GqXRmNIOq3tyoHpUVEUbb3LshAJg46Xj8qbac9YGdvxmCf8dDGWJE9FboLd5lu1sBmS9BEnVqDn2AQPWLDXVzUyFlIhZMuodX49ikEMJ7OB8",
  useCdn: false,
});