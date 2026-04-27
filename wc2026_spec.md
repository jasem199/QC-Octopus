# World Cup 2026 — Score Predictor
### Complete UI & Product Specification
*Vibe Coding Reference Document*

---

# Part 1 — Vibe Coding Prompt

> Clean, structured prompt for rapid UI implementation. Every instruction is direct and implementation-ready.

---

## Product Overview

A minimal, frictionless football score prediction app for World Cup 2026. Fast, clean, mobile-first. Not a betting product. Not a fantasy league. A daily prediction sheet with a global leaderboard.

---

## Screens & Navigation

Three sections only:

- **Matchday** — primary prediction screen (default landing)
- **Leaderboard** — competition rankings
- **Account / Settings**

---

## Matchday Screen

### Match List

- All upcoming matches listed in **chronological order**, vertically scrollable
- Users predict **all matches shown** — not selective
- After every **3 match cards**, insert a full-width **ad banner placeholder** labeled: `YOUR AD IS HERE`

### Match Card

Each card displays:

- Two team names with flags/identifiers
- Kickoff time
- Two **wheel picker inputs** (side by side) — one per team, range **0–10**
- No typing. Wheel only.

### Lock Behavior

- Each match locks **15 minutes before kickoff**
- Locked cards: visually faded/disabled, still visible, no longer editable
- Locked state transitions smoothly — no abrupt cut

### Save Fast CTA

- Fixed bottom button, always visible
- Label: **"Save Fast"**
- Color: `#D2FB6A` (accent only for this button and primary actions)
- Text color: dark (for contrast)
- Submits **all predictions at once**
- If user is not logged in → trigger login **after** tap. Predictions are preserved. No data loss.

---

## Leaderboard Screen

### Views

Three tabs: **Daily · Weekly · All Time**

### Ranking Logic

- Ranked by total points (descending)
- Tiebreaker: earlier submission time ranks higher
- No social features, no streaks, no rewards beyond ranking

---

## Scoring System

| Result | Points |
|---|---|
| Exact score match | +50 |
| Correct winner, wrong margin | +25 |
| Exact draw match | +50 |
| Wrong prediction, actual result is draw | +10 |
| Opposite winner predicted | −10 |
| No prediction made | 0 |

---

## UI Design System

### Layout

- Mobile-first, light mode only
- 8px base grid — all spacing uses multiples: 8, 16, 24, 32, 40, 48
- Vertical rhythm optimized for fast scanning
- Card internal padding: 16px or 24px

### Shape

- Soft rounded corners throughout — **12px to 20px** depending on component
- No sharp corners anywhere
- Subtle soft-shadow elevation only — no harsh borders

### Typography

- Font: **SF Pro** (fallback: Inter)
- Min body text size: **15px**
- No decorative fonts
- Headlines: Semi-bold (600–700)
- Body: Regular (400–500)
- Supporting: Regular + reduced opacity

### Colors

- Background: off-white or very light gray
- Cards: slightly elevated white / near-white
- Primary text: dark neutral
- Secondary text: muted gray
- **CTA accent: `#D2FB6A`** — used only for Save Fast + key highlights
- Success state: soft green tint
- Lock/warning state: muted amber
- Error state: soft red (minimal)

### Motion & Micro-interactions

- Default transition: **180ms–260ms**, ease-out
- Button press: scale down to **98%** → bounce back
- Score wheel: smooth inertial scroll with **soft snap** (spring animation)
- Card state changes: gentle **fade + slight slide**
- Locked state: soft fade to disabled — no sudden cut
- Motion feels alive but never distracts from workflow

---
---

# Part 2 — Hyper-Detailed Screen Specifications

> Complete, pixel-level design spec for all three screens. Use this as the definitive implementation reference.

---

## Screen 1 — Matchday

### Page Header

- Top of screen, sticky
- Left: **"Matchday"** — 20px, semi-bold (600), dark neutral
- Right: small avatar/icon circle → taps to Account
- Background: matches page background (off-white)
- Subtle bottom shadow to separate from scroll list

---

### Match List Structure

Matches are grouped under date headers. Date headers are not cards — they are inline labels within the scroll flow.

#### Date Header

- Text: e.g. `Today` or `Tomorrow · 16 June`
- Size: 13px, regular (400), muted gray
- No background, no border, no card treatment
- 16px top margin before first date header
- 8px margin below date header before first card
- 24px top margin above secondary date headers (between day groups)

#### Match Card — Full Anatomy

- Background: white / near-white
- Border radius: 16px
- Padding: 16px all sides
- Shadow: `0 2px 8px rgba(0,0,0,0.06)` — soft only

**Row 1 — Match Meta:**

- Left: Group name — 12px, regular, muted gray
- Right: Kickoff time — 12px, regular, muted gray
- If locked: 🔒 icon replaces or sits beside time, muted amber color

**Row 2 — Teams + Score Pickers:**

- Three-column layout: `[Team A]` `[Picker A : Picker B]` `[Team B]`
- Team A block: flag emoji (20px) + team name (15px, semi-bold, dark) — left aligned
- Team B block: team name + flag — right aligned
- Center: two wheel pickers side by side with `:` separator

**Wheel Picker Specs:**

- Each picker: ~40px wide, 80px tall visible window
- Shows 3 numbers at a time: previous, selected, next
- Selected number: 18px, semi-bold, dark
- Adjacent numbers: 13px, regular, muted gray
- Snap: spring animation, inertial scroll
- Background: light gray pill/capsule behind each wheel
- Range: 0–10

#### Locked Card State

- Entire card fades to ~50% opacity
- Wheel pickers disabled, non-scrollable
- 🔒 icon visible in meta row (muted amber)
- Fade transition: 220ms ease-out
- No click/touch response on pickers

#### Card Spacing

- 16px vertical gap between all match cards within the same day group
- Cards do not collapse or compress

#### Ad Banner Placeholder

- Appears after every 3 match cards (counted sequentially, ignoring date headers)
- Full card width, same horizontal padding as cards
- Height: 72px
- Background: very light gray (`#F0F0F0`)
- Border radius: 12px
- Content: `YOUR AD IS HERE` — 12px, regular, muted gray, center aligned
- No shadow
- 16px vertical margin above and below

---

### Fixed Bottom CTA

- Fixed to bottom of viewport, always visible
- Background bar: white, `box-shadow: 0 -2px 12px rgba(0,0,0,0.07)`
- Bar padding: 12px 16px
- Button: full width minus 32px (16px each side)
- Button height: 52px
- Border radius: 14px
- Background: `#D2FB6A`
- Label: **"Save Fast"** — 16px, semi-bold (600), dark neutral, center aligned
- Press animation: scale to 98% on press → spring bounce back (160ms)
- Unauthenticated tap: trigger login sheet, all predictions preserved
- Authenticated tap: submit all predictions instantly

---

## Screen 2 — Leaderboard

### Page Header

- Sticky top bar
- Center: **"Leaderboard"** — 20px, semi-bold, dark neutral

---

### Tab Bar

Three tabs: **Daily · Weekly · All Time**

- Full width, evenly distributed
- Active tab: dark text, semi-bold, `#D2FB6A` underline indicator (3px, rounded)
- Inactive tab: muted gray, regular weight
- Tab switch animation: 200ms fade + underline slide
- 16px padding below tab bar before list begins

---

### Your Rank Card (pinned above list)

- Card style: same as match cards — white, 16px radius, soft shadow
- Label "Your Rank": 12px, muted gray, top left
- Rank number: 24px, semi-bold, dark
- Points: 24px, semi-bold, dark, right aligned on same row
- Submission note below (e.g. `Submitted: 3h ago`): 12px, muted gray
- 16px margin below this card before rank list begins

---

### Rank List Rows

- Row height: 56px
- Horizontal padding: 16px
- Left: rank number — 14px, semi-bold, dark, fixed 32px width
- Middle: flag emoji (16px) + username (15px, regular, dark)
- Right: points — 15px, semi-bold, dark
- Row separator: 1px line, `rgba(0,0,0,0.06)`, full width
- Top 3 rows: rank number in `#D2FB6A` pill badge (20px × 20px, radius 6px, dark text inside)
- No tap action on rows — no social profiles
- Page header, tabs, and Your Rank card remain sticky while list scrolls

---

### Empty / Loading State

- Skeleton rows: same height as rank rows, light gray animated shimmer
- 5 skeleton rows shown on load
- Real data fades in when ready (180ms transition)

---

## Screen 3 — Account / Settings

### Page Header

- **"Account"** — 20px, semi-bold, dark neutral, left aligned

---

### Profile Block (top card)

- Card style: white, 16px radius, soft shadow
- Avatar: 48px circle — initials or photo
- Avatar background: `#D2FB6A` with dark text initials
- Username: 17px, semi-bold, dark
- Joined date below: 13px, muted gray
- Card padding: 16px

---

### Stats Block

Three-column card, equal width columns:

- Column 1: Total Points — all time
- Column 2: Rank — all time
- Column 3: Predictions submitted count (e.g. `32/48`)

Each cell:

- Value on top: 20px, semi-bold, dark
- Label below: 12px, muted gray
- Column dividers: 1px, `rgba(0,0,0,0.06)`
- Card: white, 16px radius, soft shadow
- 16px gap between Profile and Stats cards

---

### Settings List

Section label style: 11px, uppercase, muted gray, 8px bottom margin

**Preferences section:**

- Notification Settings → toggle or chevron row
- Timezone → current value shown right, chevron

**App section:**

- About / How Scoring Works → chevron
- Privacy Policy → chevron
- Terms of Use → chevron

**Each row:**

- Height: 52px
- Label: 15px, regular, dark
- Right side: value text (muted gray, 14px) + chevron, or toggle
- Bottom separator: 1px, `rgba(0,0,0,0.06)`
- Tap feedback: 180ms background flash to light gray (`#F5F5F5`)

---

### Log Out Button

- Full-width button, 52px height, 14px border radius
- Background: very light red tint (`#FFF0F0`)
- Text: soft red, 15px, semi-bold
- No shadow
- 32px top margin above button

---

### Bottom Safe Area

- 32px padding below last element to avoid overlap with system home indicator

---
---

# Global Design Rules

> These rules apply to all three screens without exception.

| Property | Value |
|---|---|
| Background | `#F7F7F5` (off-white) |
| Card surface | `#FFFFFF` |
| Primary text | `#1A1A1A` |
| Secondary text | `#9A9A9A` |
| CTA accent | `#D2FB6A` |
| Border radius range | 12px – 20px |
| Base spacing unit | 8px grid |
| Min body text size | 15px |
| Transition default | 180ms–260ms ease-out |
| Spring animation | Wheel picker + button press only |
| Font stack | SF Pro / Inter fallback |
| Color mode | Light only |
| Shadow style | Soft only — no harsh borders |
| Corner rule | No sharp corners anywhere |

---

*World Cup 2026 Score Predictor — UI Specification*
