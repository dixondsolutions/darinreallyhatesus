import { Facebook, Twitter, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const resources = [
    { name: "OpenSecrets - LaHood Campaign Finance", url: "https://www.opensecrets.org/members-of-congress/darin-lahood/summary" },
    { name: "GovTrack - LaHood's Votes", url: "https://www.govtrack.us/congress/members/darin_lahood/412674" },
    { name: "Ballotpedia - LaHood Profile", url: "https://ballotpedia.org/Darin_LaHood" },
    { name: "League of Conservation Voters Scorecard", url: "https://www.lcv.org/moc/darin-lahood/" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About This Site</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              This website is dedicated to providing factual, sourced information about Rep. Darin LaHood's voting record and its impact on Illinois' 16th District.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white text-sm flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink size={14} />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get Involved</h3>
            <p className="text-gray-300 text-sm mb-4">
              Share this information with your community and demand accountability.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/intent/tweet?text=Check%20out%20LaHood%27s%20record"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="mailto:?subject=LaHood's%20Record&body=Check%20out%20this%20site"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Share via email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} LaHood Accountability. All information sourced from public records.</p>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#record" className="hover:text-white transition-colors">
                Record
              </a>
              <a href="#action" className="hover:text-white transition-colors">
                Take Action
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Disclaimer: This is a citizen-led accountability project. All information is sourced from publicly available records and news reports.
          </p>
        </div>
      </div>
    </footer>
  )
}
