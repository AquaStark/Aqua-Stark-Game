"use client";
import { BubblesBackground } from "@/components/effects/bubbles-background"
import { PageHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useBubbles } from "@/hooks/use-bubbles";
import { CartSidebar } from "@/components/store/cart-sidebar";
import { CheckoutModal } from "@/components/store/checkout-modal";
import { StoreMain } from "@/components/store/store-main";
import { CartButton } from "@/components/store/cart-button";

export default function StorePage() {
  const bubbles = useBubbles();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-500 to-blue-900 animated-background">
      <BubblesBackground bubbles={bubbles} />
      <PageHeader  title="Aqua Stark Store"  backTo="/"  rightContent={<CartButton />}/>
      <CartSidebar />
      <CheckoutModal />
      <StoreMain />
      <Footer />
    </div>
  );
}
