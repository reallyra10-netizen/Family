import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users Dashboard - ROS Store",
  description: "Manage your user account, view orders, and track your shopping history.",
  keywords:"user dashboard, account, orders, profile, settings",
  openGraph:{
    title: "Users Dashboard - ROS Store",
    description: "Manage your account and view your orders.",
    images:['/Thumbernail.jpg']
  }
};

export default function UsersPage() {
  return <div>Users Page</div>;
}