import type { Project, FilterState } from "../types/project";

/**
 * Projeleri arama metni ve kategoriye göre filtreler.
 */
export function filterProjects(projects: Project[], filters: FilterState): Project[] {
    const searchTerm = filters.search.toLowerCase();

    return projects.filter((project) => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.tech.some((t) => t.toLowerCase().includes(searchTerm));

        const matchesCategory =
            filters.category === "all" || project.category === filters.category;

        return matchesSearch && matchesCategory;
    });
}

/**
 * Projeleri seçilen alan ve yöne göre sıralar.
 */
export function sortProjects(projects: Project[], filters: FilterState): Project[] {
    const { sortField, sortOrder } = filters;

    return [...projects].sort((a, b) => {
        let result = 0;

        if (sortField === "year") {
            result = a.year - b.year;
        } else if (sortField === "title") {
            result = a.title.localeCompare(b.title);
        }

        return sortOrder === "asc" ? result : -result;
    });
}
