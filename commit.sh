#!/usr/bin/env bash
set -euo pipefail

# Create one focused commit per selected feature, or process all features.
# Usage: bash commit.sh <feature|all> "commit message"
# For all, the message is used as a prefix (for example: "feat: update").
# Run with --list to see available feature groups.

if ! git rev-parse --show-toplevel >/dev/null 2>&1; then
  echo 'Run this script from inside a Git repository.' >&2
  exit 2
fi

if [[ ${1:-} == '--list' ]]; then
  cat <<'FEATURES'
Available feature groups:
  all           Commit every changed feature separately
  hero          Hero section
  about         About section
  experience    Experience section
  projects      Project section
  contact       Contact section
  toolkit       Toolkit section
  metrics       System metrics section
  architecture  Architecture map and related visual asset
  navigation    Navbar and footer
  shared        Shared app entry point and global styles
  readme        README documentation
  setup         Project documentation, configuration, and public assets
  other         Changed non-ignored files without a dedicated feature group
FEATURES
  exit 0
fi

if [[ $# -ne 2 ]]; then
  printf 'Usage: bash %s <feature> "commit message"\n' "$0" >&2
  printf 'Run: bash %s --list\n' "$0" >&2
  exit 2
fi

feature=$1
message=$2
if [[ -z "$message" ]]; then
  echo 'Commit message must not be empty.' >&2
  exit 2
fi

collect_other_files() {
  local path
  local -a changed_files
  files=()

  mapfile -d '' -t changed_files < <(
    { git diff --name-only -z HEAD; git ls-files --others --exclude-standard -z; } | sort -zu
  )

  for path in "${changed_files[@]}"; do
    case "$path" in
      src/components/HeroSection.jsx|src/components/AboutSection.jsx|\
      src/components/ExperienceSection.jsx|src/components/ProjectSection.jsx|\
      src/components/ContactSection.jsx|src/components/ToolkitSection.jsx|\
      src/components/SystemMetricsSection.jsx|src/components/ArchitectureMap.jsx|\
      src/components/Navbar.jsx|src/components/Footer.jsx|\
      src/components/SectionHeading.jsx|src/App.jsx|src/main.jsx|src/index.css|\
      assets/living-architecture-map.svg|.gitignore|commit.sh|README.md|*.md|\
      index.html|package.json|package-lock.json|postcss.config.js|public/*|\
      tailwind.config.js|vite.config.js)
        ;;
      *) files+=("$path") ;;
    esac
  done
}

commit_feature() {
  local name=$1
  local commit_message=$2
  local -a files

  case "$name" in
    hero)         files=(src/components/HeroSection.jsx) ;;
    about)        files=(src/components/AboutSection.jsx) ;;
    experience)   files=(src/components/ExperienceSection.jsx) ;;
    projects)     files=(src/components/ProjectSection.jsx) ;;
    contact)      files=(src/components/ContactSection.jsx) ;;
    toolkit)      files=(src/components/ToolkitSection.jsx) ;;
    metrics)      files=(src/components/SystemMetricsSection.jsx) ;;
    architecture) files=(src/components/ArchitectureMap.jsx assets/living-architecture-map.svg) ;;
    navigation)   files=(src/components/Navbar.jsx src/components/Footer.jsx) ;;
    shared)       files=(src/App.jsx src/main.jsx src/index.css src/components/SectionHeading.jsx) ;;
    readme)       files=(README.md) ;;
    setup)        files=(.gitignore commit.sh index.html package.json package-lock.json *.md postcss.config.js public tailwind.config.js vite.config.js) ;;
    other)        collect_other_files ;;
    *)
      printf 'Unknown feature: %s\n' "$name" >&2
      printf 'Run: bash %s --list\n' "$0" >&2
      return 2
      ;;
  esac

  git add -A -- "${files[@]}"
  if git diff --cached --quiet -- "${files[@]}"; then
    printf 'Skipping %s: no changes.\n' "$name"
    return 0
  fi

  printf '\nFeature: %s\nFiles in this commit:\n' "$name"
  printf '  %s\n' "${files[@]}"
  printf 'Commit message: %s\n' "$commit_message"
  git diff --cached --check -- "${files[@]}"
  git diff --cached --stat -- "${files[@]}"
  git commit -m "$commit_message" -- "${files[@]}"
}

if [[ $feature == 'all' ]]; then
  # Catch any remaining non-ignored paths after the known feature groups.
  for name in hero about experience projects contact toolkit metrics architecture navigation shared readme setup other; do
    commit_feature "$name" "$message: $name"
  done
else
  commit_feature "$feature" "$message"
fi

