import { Metadata } from 'next';
import React from 'react'

// static metadata & opengraph
export const metadata: Metadata = {
  title: "About Us - ROS Store",
  description: "Learn about ROS Store and our commitment to quality, customer satisfaction, and ethical business practices.",
  keywords:"about us, company, mission, values, customer service, quality assurance",
  openGraph:{
    title: "About Us - ROS Store",
    description: "Learn about ROS Store and our commitment to quality products and exceptional service.",
    images:['/Thumbernail.jpg']
  }
};

export default function page() {
  return (
    ''
  )
}
