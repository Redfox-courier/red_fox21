/**
 * Typography Tokens
 *
 * Maps variant names (used in <Typography variant="...">)
 * to the CSS class names defined in globals.css @layer components.
 *
 * Variant naming mirrors the seller-management convention:
 *   display → displayLarge / displayMd / displaySm
 *   headline → h1Bold / h1Semi / h2Bold / h2Semi / h3Bold / h3Semi
 *   title    → t1Bold / t1Semi / t1Med … t4Bold / t4Semi / t4Med
 *   body     → b1Semi / b1Med / b1Reg … b4Semi / b4Med
 *   caption  → c1Semi / c1Med / c2Semi / c2Med
 */

export const typographyTokens = {
  fontFamily: {
    primary: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
  },

  display: {
    large:  { cssClass: "type-display-lg", tag: "h1"  as const },
    medium: { cssClass: "type-display-md", tag: "h1"  as const },
    small:  { cssClass: "type-display-sm", tag: "h2"  as const },
  },

  headline: {
    h1: {
      bold: { cssClass: "type-h1-bold", tag: "h1" as const },
      semi: { cssClass: "type-h1-semi", tag: "h1" as const },
    },
    h2: {
      bold: { cssClass: "type-h2-bold", tag: "h2" as const },
      semi: { cssClass: "type-h2-semi", tag: "h2" as const },
    },
    h3: {
      bold: { cssClass: "type-h3-bold", tag: "h3" as const },
      semi: { cssClass: "type-h3-semi", tag: "h3" as const },
    },
  },

  title: {
    t1: {
      bold:   { cssClass: "type-t1-bold", tag: "h4" as const },
      semi:   { cssClass: "type-t1-semi", tag: "h4" as const },
      medium: { cssClass: "type-t1-med",  tag: "h4" as const },
    },
    t2: {
      bold:   { cssClass: "type-t2-bold", tag: "h5" as const },
      semi:   { cssClass: "type-t2-semi", tag: "h5" as const },
      medium: { cssClass: "type-t2-med",  tag: "h5" as const },
    },
    t3: {
      bold:   { cssClass: "type-t3-bold", tag: "h6" as const },
      semi:   { cssClass: "type-t3-semi", tag: "h6" as const },
      medium: { cssClass: "type-t3-med",  tag: "h6" as const },
    },
    t4: {
      bold:   { cssClass: "type-t4-bold", tag: "p" as const },
      semi:   { cssClass: "type-t4-semi", tag: "p" as const },
      medium: { cssClass: "type-t4-med",  tag: "p" as const },
    },
  },

  body: {
    b1: {
      semi:    { cssClass: "type-b1-semi", tag: "p"    as const },
      medium:  { cssClass: "type-b1-med",  tag: "p"    as const },
      regular: { cssClass: "type-b1-reg",  tag: "p"    as const },
    },
    b2: {
      semi:    { cssClass: "type-b2-semi", tag: "p"    as const },
      medium:  { cssClass: "type-b2-med",  tag: "p"    as const },
      regular: { cssClass: "type-b2-reg",  tag: "p"    as const },
    },
    b3: {
      semi:    { cssClass: "type-b3-semi", tag: "span" as const },
      medium:  { cssClass: "type-b3-med",  tag: "span" as const },
      regular: { cssClass: "type-b3-reg",  tag: "span" as const },
    },
    b4: {
      semi:    { cssClass: "type-b4-semi", tag: "span" as const },
      medium:  { cssClass: "type-b4-med",  tag: "span" as const },
    },
  },

  caption: {
    c1: {
      semi:   { cssClass: "type-c1-semi", tag: "span" as const },
      medium: { cssClass: "type-c1-med",  tag: "span" as const },
    },
    c2: {
      semi:   { cssClass: "type-c2-semi", tag: "span" as const },
      medium: { cssClass: "type-c2-med",  tag: "span" as const },
    },
  },
} as const;

/**
 * Flat variant map — used internally by the Typography component.
 * Keys match the `variant` prop values.
 */
export const variantMap: Record<string, { cssClass: string; tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" }> = {
  // Display
  displayLarge:  typographyTokens.display.large,
  displayMedium: typographyTokens.display.medium,
  displaySmall:  typographyTokens.display.small,

  // Headline
  h1Bold: typographyTokens.headline.h1.bold,
  h1Semi: typographyTokens.headline.h1.semi,
  h2Bold: typographyTokens.headline.h2.bold,
  h2Semi: typographyTokens.headline.h2.semi,
  h3Bold: typographyTokens.headline.h3.bold,
  h3Semi: typographyTokens.headline.h3.semi,

  // Title
  t1Bold:   typographyTokens.title.t1.bold,
  t1Semi:   typographyTokens.title.t1.semi,
  t1Medium: typographyTokens.title.t1.medium,
  t2Bold:   typographyTokens.title.t2.bold,
  t2Semi:   typographyTokens.title.t2.semi,
  t2Medium: typographyTokens.title.t2.medium,
  t3Bold:   typographyTokens.title.t3.bold,
  t3Semi:   typographyTokens.title.t3.semi,
  t3Medium: typographyTokens.title.t3.medium,
  t4Bold:   typographyTokens.title.t4.bold,
  t4Semi:   typographyTokens.title.t4.semi,
  t4Medium: typographyTokens.title.t4.medium,

  // Body
  b1Semi:    typographyTokens.body.b1.semi,
  b1Medium:  typographyTokens.body.b1.medium,
  b1Regular: typographyTokens.body.b1.regular,
  b2Semi:    typographyTokens.body.b2.semi,
  b2Medium:  typographyTokens.body.b2.medium,
  b2Regular: typographyTokens.body.b2.regular,
  b3Semi:    typographyTokens.body.b3.semi,
  b3Medium:  typographyTokens.body.b3.medium,
  b3Regular: typographyTokens.body.b3.regular,
  b4Semi:    typographyTokens.body.b4.semi,
  b4Medium:  typographyTokens.body.b4.medium,

  // Caption
  c1Semi:   typographyTokens.caption.c1.semi,
  c1Medium: typographyTokens.caption.c1.medium,
  c2Semi:   typographyTokens.caption.c2.semi,
  c2Medium: typographyTokens.caption.c2.medium,
};
