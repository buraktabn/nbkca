

declare namespace Type {

    interface Work {
        id: string | number
        slug: string
        title: string
        description: string
        image: string,
        options?: WorkOption[]
        text?: string
    }

    interface WorkOption {
        label: string
        value: string
    }

    interface Service {
        id: string | number
        title: string
        description: string
        image: string
    }
    interface ValueItem {
        id: string | number
        title: string
        description: string
        icon: string
    }

    interface Slug {
        current: string
    }

    interface CoverImageAsset {
        _ref: string
    }

    interface CoverImage {
        asset: CoverImageAsset
    }

    interface Post {
        id: string | number
        title: string
        slug: Slug
        excerpt?: string
        coverImage?: CoverImage
        category?: string
        date?: string
        text?: string
    }

}