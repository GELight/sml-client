import { SmlDocument } from "@gelight/sml";

export default class SmlRequest {

    public static async get(url: string): Promise<SmlDocument> {
        const response = await fetch(url, {
            headers: {
                "Accept": "text/plain",
                "Content-Type": "text/plain"
            },
            method: "GET"
        });
        const responseText = await response.text();
        return SmlDocument.parse(responseText);
    }

    public static async post(url: string, data: SmlDocument): Promise<SmlDocument> {
        const response = await fetch(url, {
            body: data.toString(),
            headers: {
                "Accept": "text/plain",
                "Content-Type": "text/plain"
            },
            method: "POST"
        });
        const responseText = await response.text();
        return SmlDocument.parse(responseText);
    }

    public static async delete(url: string): Promise<SmlDocument> {
        const response = await fetch(url, {
            headers: {
                "Accept": "text/plain",
                "Content-Type": "text/plain"
            },
            method: "DELETE"
        });
        const responseText = await response.text();
        return SmlDocument.parse(responseText);
    }

    public static async put(url: string, data: SmlDocument): Promise<SmlDocument> {
        const response = await fetch(url, {
            body: data.toString(),
            headers: {
                "Accept": "text/plain",
                "Content-Type": "text/plain"
            },
            method: "PUT"
        });
        const responseText = await response.text();
        return SmlDocument.parse(responseText);
    }

    public static async patch(url: string, data: SmlDocument): Promise<SmlDocument> {
        const response = await fetch(url, {
            body: data.toString(),
            headers: {
                "Accept": "text/plain",
                "Content-Type": "text/plain"
            },
            method: "PATCH"
        });
        const responseText = await response.text();
        return SmlDocument.parse(responseText);
    }

}
