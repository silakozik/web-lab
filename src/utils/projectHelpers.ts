import type { Project, FilterState, Category, SortField, SortOrder } from "../types/project";

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

/**
 * Projeleri tüm filtrelere ve sıralama kurallarına göre birleştirip döndürür.
 */
export function applyFilters(
    projects: Project[],
    search: string,
    category: Category | "all",
    sortField: SortField,
    sortOrder: SortOrder
): Project[] {
    const filters: FilterState = { search, category, sortField, sortOrder };
    const filtered = filterProjects(projects, filters);
    return sortProjects(filtered, filters);
}
