export const getAnimeResponse = async (resource, query) => {
    const cacheKey = `${resource}-${query}`

    try {
        const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
        const response = await fetch(url)
        if (!response.ok) throw new Error("API error")

        const data = await response.json()
        // simpan ke localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem(cacheKey, JSON.stringify(data))
        }
        return data
    } catch (error) {
        console.warn("Offline, ambil dari cache:", error)

        if (typeof window !== "undefined") {
            const cached = localStorage.getItem(cacheKey)
            if (cached) return JSON.parse(cached)
        }

        return { data: [], error: "Offline, cache tidak tersedia" }
    }
}



export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    }

    return response
}


