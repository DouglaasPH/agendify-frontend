// motion
import { motion } from "motion/react";

// lucide
import { MessageCircle, TriangleAlert, X } from "lucide-react";

// shadcn
import { Card } from "@/components/ui/card";

function NotFoundChat() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="w-full h-full flex justify-center items-center py-10"
    >
      <section>
        <Card className="justify-between items-center pt-10 pb-5 px-10 lg:w-md shadow-md">
          {/* title and description */}
          <section className="flex flex-col items-center gap-2">
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 border-2 border-red-200 text-red-600">
              <MessageCircle className="size-9" />
              <div className="absolute -top-2 -right-2 h-8 w-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                <X className="w-4 h-4 text-white" />
              </div>
            </div>
            <p className="font-medium text-lg text-gray-600">Chat Not Found</p>
            <p className="text-muted-foreground text-sm text-center">
              The link you accessed is invalid or has expired. Please check the
              link or return to the home page.
            </p>
          </section>

          {/* informations */}
          <Card className="w-full flex-row pl-5 py-4 gap-3 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-100 shadow-lg">
            <div>
              <TriangleAlert className="size-6 text-orange-600" />
            </div>
            <div className="flex flex-col gap-1 text-orange-600">
              <p className="font-medium text-md">Possible reasons:</p>
              <span className="text-sm">• The chat link has expired</span>
              <span className="text-sm">
                • The professional is no longer available
              </span>
              <span className="text-sm">• The link was copied incorrectly</span>
            </div>
          </Card>

          <span className="text-muted-foreground text-sm">
            Need help? Contact support for assistance
          </span>
        </Card>
      </section>
    </motion.div>
  );
}

export default NotFoundChat;
