import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function ToursPage() {
    return (
        <section className="w-full bg-gray-50 py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* LEFT CONTENT */}
                <div className="max-w-xl">
                    <p className="text-green-600 tracking-widest text-sm font-semibold mb-4">
                        CURATED EXPERIENCES
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Explore Handpicked <br />
                        Destinations Worldwide
                    </h1>

                    <p className="text-gray-600 text-base leading-relaxed">
                        Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Browse our collection and start planning
                        your next escape.
                    </p>
                </div>

                {/* SEARCH BAR */}
                <div className="w-full max-w-md">
                    <div className="flex items-center bg-white rounded-full shadow-sm border overflow-hidden">

                        <div className="pl-4 text-gray-400">
                            <Search size={18} />
                        </div>

                        <Input
                            placeholder="Search destinations..."
                            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
                        />

                        <Button className="rounded-full px-6 bg-green-600 hover:bg-green-700">
                            →
                        </Button>
                    </div>
                </div>
            </div>
        </section>
        
    )
}