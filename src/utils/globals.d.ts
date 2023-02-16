

declare namespace Type {

    interface Work {
        id: string | number
        title: string
        description: string
        image: string
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

    interface Post {
        id: string | number
        title: string
        slug: string
        description?: string
        image?: string
        category?: string
        created?: string
        text?: string
    }


}