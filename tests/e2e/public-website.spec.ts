import { test, expect } from "@playwright/test";

test.describe("LifeTime Fitness Gym Public Website", () => {
  test.use({ baseURL: "http://127.0.0.1:3000" });

  test("loads homepage with correct title, metadata, and sections", async ({ page }) => {
    await page.goto("/");

    // Title
    await expect(page).toHaveTitle(
      /LifeTime Fitness Gym \| Build Strength\. Build Confidence\. Become Your Best\./i
    );

    // Navbar
    const nav = page.locator("header");
    await expect(nav).toBeVisible();
    await expect(nav.getByText(/LifeTime Fitness/i).first()).toBeVisible();
    await expect(nav.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Services" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Plans" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Trainers" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Gallery" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();

    // Hero Section
    await expect(page.getByText("LIFETIME FITNESS GYM").first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /BUILD STRENGTH\.\s*BUILD CONFIDENCE\.\s*BECOME YOUR BEST\./i })
    ).toBeVisible();
    await expect(
      page.getByText(/Your journey to a stronger, healthier, and more confident you starts here\./i)
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "JOIN NOW" })).toBeVisible();
    await expect(page.getByRole("link", { name: "CONTACT US" })).toBeVisible();

    // Highlights band
    await expect(page.getByText("Focused Training")).toBeVisible();
    await expect(page.getByText("Flexible Plans")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Pune Location", exact: true })).toBeVisible();
    await expect(page.getByText("Supportive Community")).toBeVisible();

    // About Section
    await expect(
      page.getByText(
        /LifeTime Fitness Gym is a dedicated fitness destination in the heart of Pune, designed to help you become stronger, healthier, and more confident\./i
      )
    ).toBeVisible();
    await expect(page.getByText("Guruwar Peth, Pune").first()).toBeVisible();
    await expect(page.getByText(/Morning: 6:00 AM – 10:00 AM/i).first()).toBeVisible();
    await expect(page.getByText(/Evening: 4:00 PM – 10:00 PM/i).first()).toBeVisible();
    await expect(page.getByText("8446648527").first()).toBeVisible();

    // 6 Benefits
    await expect(page.getByRole("heading", { name: "Quality Equipment" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Motivating Environment" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Experienced Guidance" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Flexible Memberships" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fitness-Focused Community" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Convenient Pune Location" })).toBeVisible();

    // Services Section
    await expect(page.getByRole("heading", { name: "Weight Training" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Cardio Training" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Personal Training" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Functional Training" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Strength & Conditioning" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fitness & Nutrition Guidance" })).toBeVisible();

    // Trainers Section
    await expect(page.getByRole("heading", { name: "Dhirendra Pande" })).toBeVisible();
    await expect(page.getByText("Trainer").first()).toBeVisible();

    // Gallery Section
    await expect(page.getByText("The Training Space")).toBeVisible();
    await expect(page.getByText("Free Weights & Dumbbells")).toBeVisible();
    await expect(page.getByText("Cardio Conditioning Deck")).toBeVisible();

    // Contact Section
    await expect(
      page.getByText(/732, Chhatrapati Shivaji Maharaj Rd/i).first()
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Get Directions on Maps/i })
    ).toHaveAttribute("href", "https://maps.app.goo.gl/LJAx4xiLBMJK3TFS8");
    await expect(
      page.getByRole("link", { name: /Chat on WhatsApp/i })
    ).toHaveAttribute("href", /https:\/\/wa\.me\/918446648527/);

    // Footer
    await expect(
      page.getByText(/© 2026 LifeTime Fitness Gym\. All rights reserved\./i)
    ).toBeVisible();
  });

  test("navbar Login CTA navigates to existing GymFlow login page", async ({ page }) => {
    await page.goto("/");
    const navLoginBtn = page.locator("header").getByRole("link", { name: "Login" }).first();
    await navLoginBtn.click();
    await expect(page).toHaveURL(/\/login$/);
    await expect(
      page.getByText("Sign in to Lifetime Fitness Gym")
    ).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
  });

  test("mobile menu expands and contains navigation links", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    // Mobile menu button
    const menuButton = page.getByRole("button", { name: "Open menu" });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    // Drawer opens
    const drawer = page.locator("#mobile-nav-panel");
    await expect(drawer).toBeVisible();
    await expect(drawer.getByRole("link", { name: "About" })).toBeVisible();
    await expect(drawer.getByRole("link", { name: "Services" })).toBeVisible();
    await expect(drawer.getByRole("link", { name: "Staff / Owner Login" })).toBeVisible();

    // Close menu button
    const closeButton = page.getByRole("button", { name: "Close menu" });
    await expect(closeButton).toBeVisible();
    await closeButton.click();
    await expect(drawer).not.toBeVisible();
  });

  const viewports = [
    { width: 320, height: 600 },
    { width: 375, height: 667 },
    { width: 390, height: 844 },
    { width: 430, height: 932 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1280, height: 800 },
    { width: 1440, height: 900 },
  ];

  for (const vp of viewports) {
    test(`renders cleanly without horizontal overflow at ${vp.width}x${vp.height}`, async ({ page }) => {
      await page.setViewportSize(vp);
      await page.goto("/");
      await page.waitForLoadState("domcontentloaded");

      // Verify no horizontal overflow
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalScroll).toBe(false);

      // Verify header and hero are visible
      await expect(page.locator("header")).toBeVisible();
      await expect(page.locator("#home")).toBeVisible();
      await expect(page.locator("#contact")).toBeVisible();
    });
  }
});

