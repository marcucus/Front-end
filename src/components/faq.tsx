import { RouteComponentProps } from "@reach/router"

const faqs = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      question: 'Why do you never see elephants hiding in trees?',
      answer:
        "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 3,
      question: 'How do you make holy water?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      id: 4,
      question: "Why can't you hear a pterodactyl go to the bathroom?",
      answer:
        'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      id: 5,
      question: 'What do you call someone with no body and no nose?',
      answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      id: 6,
      question: 'Why did the invisible man turn down the job offer?',
      answer:
        "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
]

export const Faq: React.FC<RouteComponentProps> = () => {
    return (
          <div className="bg-gray-100">
              <div id="faq" className="max-w-7xl mx-auto py-16 px-4 divide-y-2 divide-gray-200 sm:py-24 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-extrabold text-yellow-500">Frequently asked questions</h2>
                  <div className="mt-6 pt-10">
                      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                          {faqs.map((faq) => (
                              <div key={faq.id}>
                                  <dt className="text-lg leading-6 font-bold text-yellow-400">{faq.question}</dt>
                                  <dd className="mt-2 text-base text-gray-600">{faq.answer}</dd>
                              </div>
                          ))}
                      </dl>
                  </div>
              </div>
          </div>
    )
  }